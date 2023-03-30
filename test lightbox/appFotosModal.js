Vue.component('Modal', {
	template: "#modal",
  methods: {
  	close() {
    	this.$emit('close')
    }
  }
})

Vue.component('Carousel', {
	template: "#carousel",
  props: {
  	items: { type: Array, default:() => [] }
  },
  data() {
  	return {
    	photos: {}
    }
  },
  created() {
  	this.photos = this.items.map(item => {
    	return { ...item, show: false }
    })
  },
  methods: {
  	imgClick(item) {
			item.show = true
    }
  }
})

new Vue({
  el: "#app",
  data: {
    items: [
      { thumbnail: 'http://dummyimage.com/200x150/ccc' },
      { thumbnail: 'http://dummyimage.com/200x150/449955' },
      { thumbnail: 'http://dummyimage.com/200x150/444564/' },
      { thumbnail: 'http://dummyimage.com/200x150/FF4455' },
    ]
  }
})