<template>
  <header class="header">
    <div class="navbar">
      <div class="left">
        <div class="logo">
          <img src="../assets/images/logo1.svg" alt="" />
        </div>
        <div class="menu">
          <ul>
            <li class="perfume">
              <a href="#"><span>PARFUM </span></a>
            </li>
            <li>
              <a href="#"><span>VÜCUT SPREYİ</span></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="utils">
        <ul>
          <li>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AC7088"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle></svg></a>
          </li>
          <li>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AC7088"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path></svg></a>
          </li>
          <li>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AC7088"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-shopping-cart"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path
                  d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                ></path></svg></a>
          </li>
          <li>
            <a href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AC7088"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  background-color: #ecccb2;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
}
.navbar {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  max-width: 1600px;
  padding: 20px;
  .logo {
    margin-right: 30px;
    img {
      height: 40px;
    }
  }
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu {
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: #ac7088;
        }
        &.perfume {
          margin-right: 20px;
        }
      }
    }
  }
  .utils {
    ul {
      list-style-type: none;
      display: flex;
      gap: 10px;
    }
  }
}
</style>
