# 😺 Exploding Cat TH – Multiplayer Web Game

> เกมการ์ดออนไลน์ Multiplayer ภาษาไทย  
> แนวปาร์ตี้ สนุก ปั่น ฮา  
> Inspired by *Exploding Kittens* (Fan-made / Non-commercial)

---

## 🎮 เกี่ยวกับโปรเจกต์ (About)

**Exploding Cat TH** คือเกมการ์ดออนไลน์บนเว็บ  
ที่ผู้เล่นต้องเอาชีวิตรอดจาก “แมวระเบิด”  
โดยใช้ไหวพริบ การวางแผน และการปั่นใส่เพื่อนร่วมโต๊ะ

โปรเจกต์นี้พัฒนาขึ้นเพื่อ:
- ศึกษาการพัฒนา **Real-time Multiplayer Web Game**
- ฝึกออกแบบ **Game Logic + UX**
- ใช้เป็น **Portfolio / Project Showcase**
- เปิดให้เล่นจริงกับเพื่อน ๆ

---

## ✨ ฟีเจอร์หลัก (Features)

### 🧑‍🤝‍🧑 Multiplayer
- เล่นพร้อมกันได้ **2–10 คน**
- ระบบห้อง (Create / Join Room)
- Host เป็นคนเริ่มเกม

### 🧠 กติกาเกม
- กติกาใกล้เคียง **Exploding Kittens (Base Game)**
- มีการ์ดหลัก + การ์ดเสริม (Expansion)

### 🎴 การ์ดทั้งหมด
**Base Cards**
- 💣 Exploding Cat
- 🧯 Defuse (เลือกตำแหน่งใส่กลับกองได้)
- ⏭ Skip
- ⚔️ Attack
- 👀 See the Future
- 🔀 Shuffle
- 🤝 Favor
- 🚫 Nope (Real-time)

**Cat Cards**
- แมวธรรมดา 5 แบบ (ใช้เป็นคอมโบ)

**Expansion (Chaos + Party)**
- 🔄 Reverse
- 🌀 Warp Turn
- 🎭 Swap Hand
- ⏩ Speed Up
- 😼 Steal All
- 🎲 Random Disaster
- 💣 Chain Bomb
- 🃏 Redistribute

---

## 🚫 Nope Real-time System
- เมื่อมีการใช้การ์ด → เปิด **Nope Window (3 วินาที)**
- ผู้เล่นที่มี Nope สามารถกดขัดได้
- Nope ซ้อนหลายใบ → คำนวณแบบ **เลขคี่ / เลขคู่**
- Logic ทั้งหมดทำงานฝั่ง **Server (กันโกง)**

---

## 🎯 UX / Gameplay
- เลือก **เป้าหมายผู้เล่น** ก่อนใช้การ์ด
- เลือก **ตำแหน่งวางระเบิด** ตอนใช้ Defuse
- การ์ดในมือแสดงแบบเข้าใจง่าย
- เอฟเฟกต์ / Animation ช่วยให้เกมมีชีวิต

---

## 🥚 Easter Eggs
- คลิกโลโก้แมวหลายครั้ง
- Nope ซ้อนหลายใบ
- เหตุการณ์พิเศษระหว่างเกม
- คำสั่งลับ (`meowmeow`)

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend**
  - HTML / CSS / JavaScript
- **Backend**
  - Node.js
  - Express
  - Socket.IO
- **Real-time**
  - WebSocket (via Socket.IO)
- **Deployment**
  - Render / VPS
