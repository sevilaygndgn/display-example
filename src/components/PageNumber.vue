<template>
  <div class="pagination">
    
    <ul>
      <li>
        <a href="#" class="active">
          <span>&lt;</span>
        </a>
      </li>
     <li v-for="n in 10" :key="n">
         <a href="#">
          <span>{{ n }}</span>
        </a>
    </li>
      <li>
        <a href="#" class="active">
          <span>&gt;</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.pagination {
  margin-bottom: 20px;
  ul {
    display: flex;
    justify-content: center;
    li {
      a {
        text-decoration: none;
        border: 2px solid #ac7088;
        margin-right: 5px;
        display: flex;
        padding: 10px;

        span {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
