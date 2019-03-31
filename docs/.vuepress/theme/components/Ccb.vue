<template>
  <div class="">
    <nav>
      <div class="nav-wrapper">
        <a :href="$withBase('/')" class="brand-logo">搬砖往事</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a :href="$withBase('/')">首页</a></li>
          <li><a :href="$withBase('/')">issues</a></li>
          <li><a :href="$withBase('/about')">关于</a></li>
          <li><a :href="$withBase('/category')">分类</a></li>
          <li><a :href="$withBase('/tag')">标签</a></li>
          <li><a href="https://github.com/bluegeek/blog">Github</a></li>
        </ul>
      </div>
    </nav>
    <slot name="content"></slot>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © {{(new Date).getFullYear()}} Copyright
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, options);
    });
  }
};
</script>
