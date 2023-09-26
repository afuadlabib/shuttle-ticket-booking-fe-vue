<template lang="">
  <div class="ticket" id="ticket">
    <div class="left">
      <div class="image">
        <p class="admit-one">
          <span>TRAVEL TICKET</span>
          <span>TRAVEL TICKET</span>
          <span>TRAVEL TICKET</span>
        </p>
        <div class="ticket-number">
          <p>#20200702</p>
        </div>
      </div>
      <div class="ticket-info">
        <p class="date">
          <span>WEDNESDAY</span>
          <span class="nov-10">JUNE 28</span>
          <span>2023</span>
        </p>
        <div class="show-name">
          <h1>#WarriorNunSaved</h1>
          <h2>Warrior Nun Cast & Crew</h2>
          <h2>Halo Bearers</h2>
        </div>
        <div class="time">
          <p>07:16 AM <span>TO</span> TBD</p>
        </div>
        <div class="tagline">
          <p>IN THIS LIFE OR THE NEXT</p>
        </div>
        <p class="location">
          <span>THE CAT'S CRADLE</span>
          <span class="separator"><i class="fa-solid fa-cross"></i></span
          ><span>ANDALUCÍA, SPAIN</span>
        </p>
      </div>
    </div>
    <div class="right">
      <p class="admit-one">
        <span>ADMIT ONE</span>
        <span>ADMIT ONE</span>
        <span>ADMIT ONE</span>
      </p>
      <div class="right-info-container">
        <div class="show-name">
          <h1>#WarriorNunSaved</h1>
        </div>
        <div class="time">
          <p>28.06.2023</p>
          <p>07:16 AM <span>TO</span> TBD</p>
        </div>
        <div class="barcode">
          <img src="https://i.imgur.com/DiBJvTA.png" alt="QR code" />
        </div>
        <p class="ticket-number">#20200702</p>
      </div>
    </div>
  </div>
  <button @click.prevent="generatePDF" class="bg-white text-black text-bold p-2 m-3">
    GeneratePdf
  </button>
</template>
<script>
import { mapActions } from 'pinia';
import { useTravelState } from '../stores/travel';


export default {
  name: 'PdfBase',
  methods: {
    ...mapActions(useTravelState, ['generateTicketPdf']),
    generatePDF() {
      this.generateTicketPdf()
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100vh;
  display: grid;
  font-family: 'Barlow', sans-serif;
  color: black;
  font-size: 14px;
  letter-spacing: 0.1em;
}

.ticket {
  margin: auto;
  display: flex;
  background: white;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.left {
  display: flex;
}

.image {
  height: 250px;
  background-image: url('https://s.yimg.com/ny/api/res/1.2/Z7_veDUdwMryJWHtTVCkMg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcxOTtjZj13ZWJw/https://media.zenfs.com/en/the_independent_577/59c5db5af93e84038e82db81dfc7268b');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.95;
}

.admit-one {
  position: absolute;
  color: darkgray;
  height: 250px;
  padding: 0 10px;
  letter-spacing: 0.15em;
  font-size: 12px;
  display: flex;
  text-align: center;
  justify-content: space-around;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
}

.admit-one span:nth-child(2) {
  color: white;
  font-weight: 700;
}

.left .ticket-number {
  height: 250px;
  width: 310px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  color: white;
}

.ticket-info {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
}

.date {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 5px 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.date span:first-child {
  text-align: left;
  width: 100px;
}

.date span:last-child {
  text-align: right;
  width: 100px;
}

.date .nov-10 {
  color: #d62839;
  font-size: 18px;
  width: 150px;
}

.show-name {
  font-size: 18px;
  color: #d62839;
  font-weight: 700;
}

.show-name h1 {
  font-size: 30px;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
  color: #93229f;
  font-family: 'Saira Stencil One', sans-serif;
}

.show-name h2 {
  margin-bottom: 2px;
}

.time {
  color: #505050;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
}

.time span {
  font-weight: 400;
  color: darkgray;
}

.left .time {
  font-size: 16px;
  margin-bottom: 5px;
}

.tagline {
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
}

.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 8px;
  border-top: 1px solid gray;
  font-weight: 700;
}

.location span:first-child {
  text-align: left;
}

.location span:last-child {
  text-align: right;
}

.location .separator {
  font-size: 20px;
}

.right {
  width: 200px;
  border-left: 1px dashed #404040;
}

.right .admit-one {
  color: darkgray;
}

.right .admit-one span:nth-child(2) {
  color: #505050;
}

.right .right-info-container {
  height: 250px;
  padding: 10px 10px 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.right .show-name h1 {
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
}

.right .time {
  margin-top: 10px;
}

.barcode {
  height: 100px;
}

.barcode img {
  height: 100%;
}

.right .ticket-number {
  color: #505050;
  font-weight: 700;
}
</style>
