import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  menuList = [
    { 
      title: 'Katalog Produk', 
      desc: 'Lihat dan cari semua produk tersedia', 
      icon: 'bag-handle-outline', 
      url: '/product-list' 
    },
    { 
      title: 'Keranjang Belanja', 
      desc: 'Cek pesanan yang siap dibayar', 
      icon: 'cart-outline', 
      url: '/cart' 
    },
    { 
      title: 'Dashboard Toko', 
      desc: 'Ringkasan performa dan penjualan', 
      icon: 'bar-chart-outline', 
      url: '/dashboard' 
    },
    { 
      title: 'Profil Saya', 
      desc: 'Informasi akun dan riwayat belanja', 
      icon: 'person-outline', 
      url: '/profile' 
    }
  ];
  stats = [
    { label: 'Produk', value: '24+', icon: 'cube-outline' },
    { label: 'Diskon', value: '50%', icon: 'pricetag-outline' },
    { label: 'Rating', value: '4.9', icon: 'star-outline' }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Halaman Home Person 2 berhasil terintegrasi!');
  }

}
