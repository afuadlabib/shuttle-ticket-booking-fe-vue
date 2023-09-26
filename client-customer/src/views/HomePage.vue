<template lang="">
  <div>
    <section class="bg-white dark:bg-gray-900 p-20">
      <HeroPage />
      <div>
        <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div
            class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            ></div>
          </div>
          <FilterScheduleBase />
          <div class="grid grid-cols-2 gap-5 p-5">
            <CardBase v-if="schedule_id || activedSchedule" v-for="schedule in schedules" class="grid-span-1" :key="schedule.id" :schedule="schedule" />
          </div>
          <TicketFormBase v-if="schedule_id "/>
          <PdfBase v-if="showTicket" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import HeroPage from '../components/HeroBase.vue'
import TicketFormBase from '../components/TicketFormBase.vue'
import FilterScheduleBase from '../components/FilterScheduleBase.vue'
import PdfBase from '../components/PdfBase.vue'
import CardBase from '../components/CardBase.vue'
import { mapState } from 'pinia'
import { useTravelState } from '../stores/travel'

export default {
  name: 'HomePage',
  components: {
    HeroPage,
    TicketFormBase,
    FilterScheduleBase,
    CardBase,
    PdfBase
  },
  computed:{
    ...mapState(useTravelState, ['schedules','schedule_id','activedSchedule', 'showTicket'])
  }
}
</script>
<style lang=""></style>
