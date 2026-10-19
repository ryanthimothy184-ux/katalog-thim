"use server";

import { redirect } from "next/navigation";
import { buatClientSesi } from "@/lib/supabase/server";

export async function pastikanAdmin() {
  const supabase = await buatClientSesi();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login?error=" + encodeURIComponent("Kamu harus masuk terlebih dahulu."));
  }

  return { supabase, user };
}

export async function loginAdmin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    redirect("/admin/login?error=" + encodeURIComponent("Email dan password wajib diisi."));
  }

  const supabase = await buatClientSesi();
  const { error } = await supabase.auth.signInWithPassword({
    email: String(email).trim(),
    password: String(password),
  });

  if (error) {
    const pesan =
      error.message === "Invalid login credentials"
        ? "Email atau password salah."
        : error.message || "Gagal masuk. Periksa kembali email dan password.";
    redirect("/admin/login?error=" + encodeURIComponent(pesan));
  }

  redirect("/admin");
}

export async function keluarAdmin() {
  const supabase = await buatClientSesi();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function gantiPassword(formData) {
  const { supabase } = await pastikanAdmin();

  const passwordBaru = formData.get("password_baru");
  const konfirmasiPassword = formData.get("konfirmasi_password");

  if (!passwordBaru || !konfirmasiPassword) {
    redirect(
      "/admin/password?error=" +
        encodeURIComponent("Password baru dan konfirmasi password wajib diisi.")
    );
  }

  if (passwordBaru.length < 8) {
    redirect(
      "/admin/password?error=" +
        encodeURIComponent("Password baru minimal harus 8 karakter.")
    );
  }

  if (passwordBaru !== konfirmasiPassword) {
    redirect(
      "/admin/password?error=" +
        encodeURIComponent("Password baru dan konfirmasi password tidak cocok.")
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: passwordBaru,
  });

  if (error) {
    redirect(
      "/admin/password?error=" +
        encodeURIComponent(error.message || "Gagal mengganti password.")
    );
  }

  redirect(
    "/admin/password?sukses=" +
      encodeURIComponent("Password berhasil diganti.")
  );
}

export const ubahPassword = gantiPassword;
