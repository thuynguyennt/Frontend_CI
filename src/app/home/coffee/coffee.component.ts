import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  
  private subscription!: Subscription ;

  public products: any = [
    {
      "title": "CÀ PHÊ PHIN",
      "content": "Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin', cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người Việt",
      "items": [
        {
          "id": 1,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png",
          "name": "PHIN ĐEN ĐÁ",
          "price": "29,000 VND"
        },
        {
          "id": 2,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png",
          "name": "PHIN SỮA ĐÁ",
          "price": "29,000 VND"
        },
        {
          "id": 3,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png",
          "name": "PHIN ĐEN NÓNG",
          "price": "29,000 VND"
        },
        {
          "id": 4,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/thumbs/270_crop_PHIN-SUA-NONG.png",
          "name": "PHIN ĐEN ĐÁ",
          "price": "29,000 VND"
        }
      ]
    },

    {
      "title": "PHINDI - CÀ PHÊ PHIN THẾ HỆ MỚI",
      "content": "Một thế hệ Cà Phê Phin Việt Nam hoàn toàn mới, phục vụ cho thế hệ trẻ đầy nhiệt huyết, độc lập và sáng tạo. Vẫn mang trong mình tinh tuý chắt lọc từ Cà Phê Phin Việt Nam nhưng êm chất Phin, kết hợp độc đáo cùng những vị ngon từ Kem Sữa - Hạnh Nhân - Choco. PhinDi, Cà Phê Phin Thế Hệ Mới - Chất Phin Êm, Ngon Tròn Vị!",
      "items": [
        {
          "id": 1,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/thumbs/270_crop_phindi_choco_new.png",
          "name": "PHINDI CHO CO",
          "price": " 39,000 VND"
        },
        {
          "id": 2,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/12_2020/thumbs/270_crop_PHINDI_Hong_Tra.png",
          "name": "PHINDI HONG TRA",
          "price": "39,000 VND"
        },
        {
          "id": 3,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/thumbs/270_crop_phindi_kem_sua_new.png",
          "name": "PHINDI KEM SUA",
          "price": "39,000 VND"
        },
        {
          "id": 4,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/11_2020/thumbs/270_crop_phindi_hanh_nhan_new.png",
          "name": "PHINDI HẠNH NHÂN",
          "price": "39,000 VND"
        }
      ]
    },

    {
      "title": "CÀ PHÊ ESPRESSO",
      "content": "Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi.",
      "items": [
        {
          "id": 1,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png",
          "name": "AMERICANO",
          "price": " 59,000 VND"
        },
        {
          "id": 2,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png",
          "name": "LATTE",
          "price": "59,000 VND"
        },
        {
          "id": 3,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_CAPPUCINO.png",
          "name": "CAPUCHINO",
          "price": "59,000 VND"
        },
        {
          "id": 4,
          "img": "https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_ESPRESSO.png",
          "name": "ESPRESSO",
          "price": "59,000 VND"
        }
      ]
    }
  ];

  // public products: Product[] = [];

  constructor(private coffeeService: CoffeeService) {

   }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.subscription = this.coffeeService.getAllProduct().subscribe(products => {
      this.products = products;
    }), (error: any) => {
      console.log(error)
    }
  }
    
}
