<template>
  <div class="pizza-block">
    <img
        :src="image"
        alt="Pizza"
        class="pizza-block__image"
    />
    <h4 class="pizza-block__title">{{ title }}</h4>
    <div class="pizza-block__selector">
      <ul>
        <li
            v-for="thickness in ['тонкое', 'традиционное']"
            :class="{'active': thickness === selectedThickness}"
            @click="selectedThickness = thickness"
            v-text="thickness"
        />
      </ul>
      <ul>
        <li
            v-for="diameter in [26, 30, 40]"
            :class="{'active': diameter === selectedDiameter}"
            @click="selectedDiameter = diameter"
            v-text="`${diameter} см.`"
        />
      </ul>
    </div>
    <div class="pizza-block__bottom" @click="addToCart()">
      <div class="pizza-block__price">от {{ price }} ₽</div>
      <div class="button button--outline button--add">
        <svg
            fill="none"
            height="12"
            viewBox="0 0 12 12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i v-if="count">{{ count }}</i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import useCart from '../composables/useCart'

export default {
  props: {
    id: Number,
    title: String,
    price: Number,
    image: String,
  },

  setup (props) {
    const { addPizza, getCountForId } = useCart()

    const selectedDiameter = ref(26)
    const selectedThickness = ref('тонкое')

    const addToCart = () => {
      addPizza({
        id: props.id,
        thickness: selectedThickness.value,
        diameter: selectedThickness.value,
        price: props.price,
      })
    }

    const count = computed(() => getCountForId(props.id))

    return {
      selectedDiameter,
      selectedThickness,
      addToCart,
      count
    }
  }
}
</script>