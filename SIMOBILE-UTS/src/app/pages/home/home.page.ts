import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  menuList = [
    { title: 'Data Anggota', desc: 'Lihat daftar anggota organisasi', icon: 'people-outline', url: '/anggota' },
    { title: 'Jadwal Kegiatan', desc: 'Agenda kegiatan mendatang', icon: 'calendar-outline', url: '/kegiatan' },
    { title: 'Pengaturan Akun', desc: 'Kelola profil dan preferensi', icon: 'settings-outline', url: '/pengaturan' }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Halaman Home Person 2 berhasil dimuat!');
  }

}
