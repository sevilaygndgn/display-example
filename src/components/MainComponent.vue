<template>
  <div class="content">
    <ul>
      <li>
        <a href="#"
          ><img src="../assets/images/1.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Sundrenched Eau de Parfum</div>
            <div class="price">2.349,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/2.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Sundrenched Vücut Spreyi</div>
            <div class="price">799,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/3.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Sundrenched Vücut Spreyi</div>
            <div class="price">799,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/4.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Eau de Parfum</div>
            <div class="price">2.349,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/5.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Eau de Parfum</div>
            <div class="price">1.749,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/6.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Vücut Losyonu</div>
            <div class="price">799,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/7.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Passion Eau de Parfum</div>
            <div class="price">2.349,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/8.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Passion Eau de Parfum</div>
            <div class="price">1.749,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
      <li>
        <a href="#"
          ><img src="../assets/images/9.jpg" alt="" />
          <div class="items">
            <div class="product-name">Bombshell Passion Vücut Spreyi</div>
            <div class="price">799,00 TL</div>
            <button>Sepete ekle</button>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.content {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  margin-bottom: 20px;
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    li {
      border: solid 1px #fef4f3;
      a {
        display: block;
        text-decoration: none;
        justify-content: center;
        img {
          display: block;
          margin-bottom: 10px;
          width: 100%;
        }
        .items {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          .product-name {
            font-size: 20px;
            margin-bottom: 10px;
          }
          .price {
            font-size: 18px;
            margin-bottom: 20px;
          }
          button {
            background-color: #deb6ab;
            border-color: transparent;
            outline: none;
            font-size: 18px;
            color: white;
            width: 200px;
            height: 40px;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
