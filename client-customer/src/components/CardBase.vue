<template lang="">
  <div>
    <a
        @click.prevent="formTicket"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://teraspasundan.com/wp-content/uploads/2023/01/Sewa-Bus-Pariwisata-Jakarta.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{armada.name}}
          </h5>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Price : Rp. {{schedule.price}}
          </h5>
          <h5 class="mb-2 text font-bold tracking-tight text-gray-900 dark:text-white">
            Departure: {{schedule.time}}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Origin {{schedule.origin}} to destination {{schedule.destination}} estimation {{schedule.estimation}} jam
          </p>
        </div>
      </a>
  </div>
</template>
<script>
import { mapWritableState } from 'pinia'
import { useTravelState } from '../stores/travel'

export default {
    name: 'CardBase',
    data(){
      return{
        armada:{},
        driver:{}
      }

    },
    computed:{
      ...mapWritableState(useTravelState, ['schedule_id','activedSchedule','total'])
    },
    props: {
      schedule: Object
    },
    created(){
      const {Armada, Driver} = this.schedule
      this.armada = Armada
      this.driver = Driver
      this.total = this.schedule.price
    },
    methods: {
      formTicket(){
        this.schedule_id = this.schedule.id
        this.activedSchedule = false
      }
    }
}
</script>
<style lang=""></style>
