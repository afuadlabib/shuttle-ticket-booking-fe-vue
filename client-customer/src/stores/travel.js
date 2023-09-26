import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://server.labcenter.site'

export const useTravelState = defineStore('travel', {
  state: () => ({
    filterQuery: {
      destination: '',
      origin: ''
    },
    departure: '',
    schedule_id: '',
    total: '',
    schedules: [],
    inputTicket: {
      username: '',
      seat: ''
    },
    activedSchedule: true,
    showTicket : false,
    isLogin: false
  }),
  actions: {
    async fetchScheduleData() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/schedules`,
          params: this.filterQuery
        })
        this.schedules = data
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async buyTicket() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/tickets`,
          method: 'post',
          data: {
            ...this.inputTicket,
            departure_schedule: this.departure,
            schedule_id: this.schedule_id
          }
        })
        Swal.fire({
          icon: 'success',
          title: `Congratulations ${data.username}`,
          text: 'Buying ticket success',
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        })
        ;(this.filterQuery = {
          destination: '',
          origin: ''
        }),
          (this.departure = ''),
          (this.schedule_id = ''),
          (this.schedules = []),
          (this.inputTicket = {
            username: '',
            seat: ''
          })
          this.showTicket = true
      } catch (error) {
        Swal.fire({
          icon: 'Error',
          title: `Upss ... `,
          text: `${error.response.data.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        })
      }
    },
    async payment() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/tickets/generate-midtrans`,
          method: 'post',
          data: {
            total: this.total,
            username: this.inputTicket.username
          }
        })
        const cb = this.buyTicket
        window.snap.pay(data.token, {
          onSuccess: async function (result) {
            cb()
            Swal.fire({
              icon: 'success',
              title: `Congratulations ${result.status_message}`,
              text: 'Buying ticket success',
              toast: true,
              position: 'top-end',
              timer: 2000,
              showConfirmButton: false
            })
          }
        })
      } catch (error) {
        Swal.fire({
          icon: 'Error',
          title: `Upss ... `,
          text: `${error.response.data.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        })
      }
    },
    async generateTicketPdf(){
      try {
        console.log("masuk");
        const {data} = await axios({
          url: `${baseUrl}/api/tickets/generate-ticket`
        })
        console.log(data.data.url);
        window.open(data.data.url)
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async doGoogleLoginHandler(response) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/users/google-login`,
          method: 'post',
          headers: {
            credential: response.credential
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Welcome',
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        })
        localStorage.access_token = data.access_token
        localStorage.customer = data.email
        this.customer = data.email
        this.router.push('/')
        this.isLogin = true
      } catch (error) {
        const { message } = error.response.data
        Swal.fire({
          icon: 'error',
          title: `Something Wrong !!!`,
          text: `${message}`,
          toast: true,
          position: 'top-end',
          timer: 2500,
          showConfirmButton: false
        })
      }
    },
  }
})
