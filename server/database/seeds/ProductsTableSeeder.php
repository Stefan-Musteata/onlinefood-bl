<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [

            [
              'id' => 1, 
              'type' => 'food',
              'name' => 'Meniu de Vis STAR Kebab',  
              'weight' => '580',
              'price' => '81',
              'img' => 'star-kebab.jpg',
            ],
            [
              'id' => 2, 
              'type' => 'food',
              'name' => 'STAR Kebab pui',  
              'weight' => '42',
              'price' => '51',
              'img' => 'kebab-pui.jpg'
            ],
            [
              'id' => 3, 
              'type' => 'food',
              'name' => 'Platou magic pui',  
              'weight' => '500',
              'price' => '65',
              'img' => 'platou.jpg'
            ],
            [
              'id' => 4, 
              'type' => 'drinks',
              'name' => 'Ice Tea Blue',  
              'weight' => '580',
              'price' => '16',
              'img' => 'tea-blue.jpg'
            ],
            [
              'id' => 5, 
              'type' => 'drinks',
              'name' => 'Limonadă cu portocale și lămâi',  
              'weight' => '300',
              'price' => '18',
              'img' => 'orange-lemon.jpg'
            ],
        ];
        

      foreach($products as $product) {
			  Product::create($product);
      };
    }
}
