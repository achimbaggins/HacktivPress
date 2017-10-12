# HacktivPress
Live Coding HacktivPress

## Struktur model
#### Model User
Field | Tipe data | Descriptions
--- | --- | ----
id | String | auto generate by system
username | String | user login
password | String | password login
salt | String | secret untuk hash password

#### Model Article
Field | Tipe Data | Descriptions
--- | --- | ----
title | String | Judul Artikel
slug | String | auto generate using npm "achim-slug"
content | String | Konten Artikel
category | String | Kategori Artikel
author | String | merupakan ID User yang melakukan posting

#### Struktur Frontend
Path | Keterangan
--- | ---
/ | Halaman Utama : bisa diakses oleh orang umum tanpa proses login
/read/:slug | Halaman detail Artikel
/category/:cat | Halaman Filter artikel berdasarkan Kategori
/author/:name | Halaman filter artikel berdasarkan author
/dashboard | Halaman dashboard untuk user & Pada halaman ini user juga bisa menambahkan artikel, delete dan update artikel yang pernah dipostingnya

#### Struktur Backend
Path | Keterangan
--- | ---
/ | Halaman Utama : bisa diakses oleh orang umum tanpa proses login
/read/:slug | Halaman detail Artikel
/category/:cat | Halaman Filter artikel berdasarkan Kategori
/author/:name | Halaman filter artikel berdasarkan author
/login | Halaman login dan register username
/dashboard | Halaman dashboard untuk user & Pada halaman ini user juga bisa menambahkan artikel, delete dan update artikel yang pernah dipostingnya
