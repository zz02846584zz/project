<template>
  <div>
    <h1>無限階層導航選單</h1>

    <ul class="nav site-nav">
      <li><a href=#>選單1</a></li>
      <li><a href=#>選單2</a></li>
      <li class=flyout>
          <a href=#>選單3</a>
          <ul class="flyout-content nav stacked">
              <li><a href=#>選單1</a></li>
              <li><a href=#>選單2</a></li>
              <li class="flyout-alt">
                  <a href=#>選單3</a>
                  <ul class="flyout-content nav stacked">
                      <li><a href=#>選單1</a></li>
                      <li><a href=#>選單2</a></li>
                      <li class="flyout-alt">
                          <a href=#>選單3</a>
                          <ul class="flyout-content nav stacked">
                              <li class="flyout-alt">
                                  <a href=#>選單1</a>
                                  <ul class="flyout-content nav stacked">
                                      <li><a href=#>選單2</a></li>
                                      <li class="flyout-alt">
                                          <a href=#>選單3</a>
                                          <ul class="flyout-content nav stacked">
                                              <li><a href=#>選單2</a></li>
                                              <li><a href=#>選單3</a></li>
                                              <li><a href=#>選單1</a></li>
                                          </ul>
                                      </li>
                                      <li><a href=#>選單1</a></li>
                                  </ul>
                              </li>
                              <li><a href=#>選單2</a></li>
                              <li class="flyout-alt">
                                  <a href=#>選單3</a>
                                  <ul class="flyout-content nav stacked">
                                      <li><a href=#>選單2</a></li>
                                      <li><a href=#>選單3</a></li>
                                      <li><a href=#>選單1</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}
a {
	text-decoration: none;
}
.nav {
	list-style: none;
	margin-left: 0;
	li {
		display: inline-block;
		zoom: 1;
		a {
			display: inline-block;
			zoom: 1;
		}
	}
}
.stacked {
  a {
    display: block;
  }
}
.flyout {
	position: relative;
	&:hover {
		>.flyout-content {
			left: 0;
			height: auto;
			overflow: visible;
		}
	}
}
.flyout-alt {
	position: relative;
	&:hover {
		>.flyout-content {
			top: 0;
			left: 100%;
			height: auto;
			overflow: visible;
		}
	}
}
.flyout-content {
	position: absolute;
	top: 100%;
	height: 0;
	overflow: hidden;
}
.site-nav {
	a {
		line-height: 1;
		padding: 1em;
		background-color: #eaeaea;
		color: #333;
		white-space: nowrap;
		border: 0 solid #f7f7f7;
	}
	>li {
		>a {
			border-left-width: 1px;
		}
		&:first-child {
			>a {
				border: none;
			}
		}
	}
}
.site-nav.flyout {
	&:hover {
		>a {
			color: #435704;
			background-color: #BADA55;
		}
	}
}
.site-nav.flyout-alt {
	&:hover {
		>a {
			color: #435704;
			background-color: #BADA55;
		}
		>.flyout-content {
			top: -1px;
		}
	}
	>a {
		&:after {
			content: " »";
		}
	}
}
.site-nav.flyout-content {
	border: 0 solid #f7f7f7;
	border-width: 1px 0 0 1px;
	a {
		border-bottom-width: 1px;
	}
}

</style>