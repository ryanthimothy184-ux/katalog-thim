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
Baca docs/user-stories.md bagian US-02.

Ubah app/produk/[id]/page.jsx supaya mengambil satu produk dari tabel "produk" di Supabase berdasarkan id di URL, di sisi server, memakai koneksi Supabase yang sudah dibuat di lib/supabase. Kalau produk tidak ditemukan, panggil notFound(). Jangan ubah tampilannya. Hapus CatatanBelumAktif dari halaman ini, tapi biarkan tombol WhatsApp.

**Hasil:**
- Berhasil memperbarui `app/produk/[id]/page.jsx` untuk mengambil data produk spesifik dari tabel `produk` di Supabase berdasarkan `id`.
- Menangani kondisi jika produk tidak ditemukan atau query gagal dengan memanggil `notFound()`.
- Tampilan detail produk tetap dipertahankan sesuai desain asli.
- Komponen `CatatanBelumAktif` dihapus dan komponen `TombolWhatsApp` tetap dibiarkan.

**Perbaikan:**
Tidak ada kendala, memanfaatkan `buatClientServer` dari `lib/supabase/server`.

## US-03 Pesan via WhatsApp

**Prompt:**
Baca docs/rancangan-teknis.md bagian "Pesan WhatsApp (US-03)".

Ubah components/TombolWhatsApp.jsx menjadi tautan yang membuka https://wa.me/ ke nomor di lib/toko.js, dengan pesan otomatis berisi nama dan harga produk dalam format rupiah. Pesan di-encode dengan encodeURIComponent dan dibuka di tab baru. Pertahankan tampilan tombolnya. Hapus CatatanBelumAktif yang menyebut US-03 di halaman detail produk.

**Hasil:**
- Berhasil mengubah `components/TombolWhatsApp.jsx` menjadi tautan `<a>` ke `https://wa.me/<nomor>?text=<pesan>`.
- Nomor WhatsApp diambil dari `lib/toko.js` dan pesan otomatis menyertakan nama dan harga produk (dalam format rupiah).
- Pesan di-encode menggunakan `encodeURIComponent` dan dibuka di tab baru (`target="_blank"`).
- Tampilan dan styling tombol tetap dipertahankan.
- `CatatanBelumAktif` di halaman detail produk sudah dihapus.

**Perbaikan:**
Tidak ada kendala.


## US-04 Login admin

**Prompt:**
Baca AGENTS.md bagian aturan keamanan dan docs/user-stories.md bagian US-04.

Buat login admin memakai Supabase Auth (email dan password) dengan @supabase/ssr dan cookie, memakai SUPABASE_URL dan SUPABASE_PUBLISHABLE_KEY. Login diproses dengan Server Action di app/admin/actions.js dan disambungkan ke form di app/admin/login/page.jsx. Login berhasil diarahkan ke /admin; login gagal menampilkan pesan error yang jelas di halaman login. Buat juga tombol "Keluar" di components/NavAdmin.jsx berfungsi: mengakhiri sesi lalu kembali ke /admin/login. Jangan ubah tampilan. Hapus CatatanBelumAktif dari halaman login.

**Hasil:**
- Berhasil menambahkan helper `buatClientSesi` di `lib/supabase/server.js` menggunakan `@supabase/ssr` dan cookies dengan `SUPABASE_URL` dan `SUPABASE_PUBLISHABLE_KEY`.
- Berhasil membuat Server Action `loginAdmin` dan `keluarAdmin` di `app/admin/actions.js`.
- Form di `app/admin/login/page.jsx` tersambung ke `loginAdmin`, mengarahkan ke `/admin` jika sukses dan menampilkan pesan error jika gagal.
- Tombol "Keluar" di `components/NavAdmin.jsx` mengakhiri sesi admin melalui `keluarAdmin` dan kembali ke `/admin/login`.
- Komponen `CatatanBelumAktif` dihapus dari halaman login tanpa mengubah tampilan form.

**Perbaikan:**
Tidak ada kendala, penanganan cookies dan kredensial aman di server.


## US-05 Ganti password

**Prompt:**
Baca docs/user-stories.md bagian US-05.

Buat Server Action ganti password di app/admin/actions.js untuk admin yang sedang login, memakai Supabase Auth. Validasi di server: password baru minimal 8 karakter dan harus sama dengan konfirmasi. Tampilkan pesan berhasil atau pesan error yang jelas di halaman. Sambungkan ke form di app/admin/password/page.jsx tanpa mengubah tampilannya. Hapus CatatanBelumAktif dari halaman ini.

**Hasil:**
- Berhasil menambahkan Server Action `gantiPassword` di `app/admin/actions.js` yang memeriksa login admin terlebih dahulu sebelum mengubah data.
- Menambahkan validasi server bahwa password baru minimal 8 karakter dan cocok dengan konfirmasi password.
- Menjalankan pembaruan password menggunakan `supabase.auth.updateUser`.
- Form di `app/admin/password/page.jsx` tersambung ke `gantiPassword` dan menampilkan pesan berhasil atau pesan error yang jelas.
- Menghapus komponen `CatatanBelumAktif` tanpa mengubah tampilan form.

**Perbaikan:**
Tidak ada kendala, pemeriksaan login di server diterapkan sesuai aturan keamanan AGENTS.md.


## US-06 Proteksi halaman admin

**Prompt:**
Baca AGENTS.md aturan keamanan nomor 3 dan 4, dan docs/user-stories.md bagian US-06.

Buat file proxy.js di root proyek (Next.js 16). Semua rute /admin kecuali /admin/login wajib login dengan Supabase Auth; kalau belum login, alihkan ke /admin/login. Pastikan juga setiap Server Action yang mengubah data memeriksa login di server. Hapus CatatanBelumAktif dari halaman /admin.

**Hasil:**
- Berhasil membuat `proxy.js` di root proyek untuk memproteksi semua rute `/admin` kecuali `/admin/login`.
- Setiap permintaan ke rute terproteksi diperiksa menggunakan `supabase.auth.getUser()`, jika belum login dialihkan ke `/admin/login`.
- Membuat helper `pastikanAdmin` di `app/admin/actions.js` dan memastikan setiap Server Action yang mengubah data memeriksa sesi admin di server.
- Menghapus komponen `CatatanBelumAktif` dari `app/admin/page.jsx`.

**Perbaikan:**
Tidak ada kendala, perlindungan rute dan validasi aksi aman berlapis di server.


## Debugging dan fitur bonus

Tambahkan bagian baru untuk setiap error yang kamu perbaiki atau fitur bonus yang kamu kerjakan.
