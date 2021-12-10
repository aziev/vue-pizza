import { computed, ref } from 'vue'

const items = ref([])

export default function useCart () {

  const addPizza = (properties) => {
    items.value.push(properties)
  }

  const getCountForId = (id) => {
    return items.value.filter(item => item.id === id).length
  }

  const count = computed(() => items.value.length)

  const price = computed(() => {
    return items.value.reduce((total, item) => total + item.price, 0)
  })

  return {
    addPizza,
    getCountForId,
    count,
    price,
  }
}