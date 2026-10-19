# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang kamu minta, hasilnya, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI]** untuk prompt yang kamu tulis sendiri (bukan dari lembar kerja).

## US-01 Katalog dari database

**Prompt:**
Baca AGENTS.md dan docs/user-stories.md bagian US-01.

Ubah app/page.jsx supaya daftar produk diambil dari tabel "produk" di Supabase, di sisi server, memakai SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable. Buat koneksi Supabase untuk server di folder lib/supabase.

Tampilkan produk dengan komponen KartuProduk yang sudah ada, tanpa mengubah tampilannya. Kalau gagal mengambil data, tampilkan pesan error yang jelas di halaman. Kalau tabel kosong, tampilkan tulisan "Belum ada produk". Hapus CatatanBelumAktif dari halaman ini.

**Hasil:**
- Berhasil membuat koneksi Supabase server di `lib/supabase/server.js` (dan `lib/supabase/index.js`) menggunakan SUPABASE_URL dan SUPABASE_SECRET_KEY.
- Berhasil memperbarui `app/page.jsx` menjadi async Server Component untuk membaca data dari tabel `produk`.
- Menggunakan komponen `KartuProduk` tanpa mengubah styling.
- Menampilkan pesan error jika terjadi kegagalan pengambilan data dan tulisan "Belum ada produk" jika tabel kosong.
- Berhasil menghapus komponen `CatatanBelumAktif` dan data tiruan dari `app/page.jsx`.

**Perbaikan:**
Tidak ada kendala, kode sesuai aturan keamanan dan panduan desain.


## US-02 Detail produk

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-03 Pesan via WhatsApp

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-04 Login admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-05 Ganti password

**Prompt:**

**Hasil:**

**Perbaikan:**

## US-06 Proteksi halaman admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## Debugging dan fitur bonus

Tambahkan bagian baru untuk setiap error yang kamu perbaiki atau fitur bonus yang kamu kerjakan.
