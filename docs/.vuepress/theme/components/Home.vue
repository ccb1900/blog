<template>
  <div class="container">
    <div
      class="row"
      v-for="x in $site.pages"
      :key="x.key"
      v-if="x.type === 'post'"
    >
      <div class="col s12 m12">
        <div class="card blue">
          <div class="card-content white-text">
            <span class="card-title">{{ x.title }}</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div class="card-action">
            <a>{{ x.lastUpdated }}</a>
            <a :href="$withBase(x.path)">阅读</a>
          </div>
        </div>
      </div>
    </div>

    <ul class="pagination">
      <li class="disabled">
        <a href="#!"><i class="material-icons">chevron_left</i></a>
      </li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect">
        <a href="#!"><i class="material-icons">chevron_right</i></a>
      </li>
    </ul>
  </div>
</template>
