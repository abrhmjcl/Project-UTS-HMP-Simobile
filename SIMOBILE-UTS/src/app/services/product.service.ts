import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Beras Premium 5kg',
            category: 'Makanan Pokok',
            description: 'Beras premium dengan kualitas terbaik',
            purchasePrice: 55000,
            sellingPrice: 65000,
            stock: 25,
            imageUrl: ''
        },
        {
            id: 2,
            name: 'Minyak Goreng 2L',
            category: 'Makanan Pokok',
            description: 'Minyak goreng sawit kemasan botol 2L',
            purchasePrice: 28000,
            sellingPrice: 35000,
            stock: 15,
            imageUrl: ''
        },
        {
            id: 3,
            name: 'Gula Pasir 1kg',
            category: 'Makanan Pokok',
            description: 'Gula pasir halus 1kg',
            purchasePrice: 12000,
            sellingPrice: 15000,
            stock: 30,
            imageUrl: ''
        },
        {
            id: 4,
            name: 'Indomie Goreng',
            category: 'Makanan Instan',
            description: 'Indomie goreng rasa ayam bawang',
            purchasePrice: 2500,
            sellingPrice: 3500,
            stock: 75,
            imageUrl: ''
        },
        {
            id: 5,
            name: 'Teh Botol 500ml',
            category: 'Minuman',
            description: 'Teh manis dalam kemasan botol 500ml',
            purchasePrice: 3000,
            sellingPrice: 5000,
            stock: 50,
            imageUrl: ''
        },
        {
            id: 6,
            name: 'Sabun Cuci Piring',
            category: 'Kebutuhan Rumah',
            description: 'Sabun cuci piring cair dengan aroma lemon',
            purchasePrice: 10000,
            sellingPrice: 14000,
            stock: 20,
            imageUrl: ''
        },
        {
            id: 7,
            name: 'Kopi Luwak 250g',
            category: 'Minuman',
            description: 'Bubuk kopi luwak kemasan 250g',
            purchasePrice: 8000,
            sellingPrice: 12000,
            stock: 0,
            imageUrl: ''
        },
        {
            id: 8,
            name: 'Deterjen Ranso 800g',
            category: 'Kebutuhan Rumah',
            description: 'Dijamin bersih',
            purchasePrice: 15000,
            sellingPrice: 20000,
            stock: 12,
            imageUrl: ''
        },
        {
            id: 9,
            name: 'Telur Ayam 1kg',
            category: 'Makanan Pokok',
            description: 'Telur ayam negeri 1kg',
            purchasePrice: 22000,
            sellingPrice: 28000,
            stock: 8,
            imageUrl: ''
        },
        {
            id: 10,
            name: 'Botol La Minerale',
            category: 'Minuman',
            description: 'Air minerale kemasan botol 500ml',
            purchasePrice: 2000,
            sellingPrice: 3500,
            stock: 0,
            imageUrl: ''
        }
    ];

    private nextId = 11;
    constructor() {
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    searchProducts(keyword: string): Product[]{
        if(!keyword || keyword.trim() === ''){
            return this.products;
        }
        const lowerKeyword = keyword.toLowerCase();
        return this.products.filter(p => 
            p.name.toLowerCase().includes(lowerKeyword) || 
            p.category.toLowerCase().includes(lowerKeyword)
        );
    }

    getTotalProductCOunt(): number {
        return this.products.length;
    }


    
    addProduct(product: Omit<Product, 'id'>): void {
        const newProduct: Product = {
            ...product,
            id: this.nextId++
        };
        this.products.push(newProduct);
    }

    updateProduct(id: number, updateData: Partial<Product>): boolean {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products[index] = {
                ...this.products[index], ...updateData };
                return true;
            }
        return false;
    }

    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1){
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }

    updateStock(productId: number, quantitySold: number): boolean {
        const product = this.getProductById(productId);
        if (product && product.stock >= quantitySold) {
            product.stock -= quantitySold;
            return true;
        }
        return false;
    }
}