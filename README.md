# 🛡️ Perspective AI Toxicity Analyzer
A simple web application that uses **Google's Perspective API** to analyze text toxicity in real-time. Built with **React (Frontend)** and **Express.js (Backend)**.


## 🚀 Features
✅ Analyze text toxicity using **Google Perspective API**  
✅ Displays **toxicity score** based on user input  
✅ Modern **UI with hover effects** and interactive styling  
✅ Simple **React + Express.js** setup  


## 📸 Demo Screenshot
![Screenshot 2025-02-25 224918](https://github.com/user-attachments/assets/deda9889-44e0-4405-a784-af93f7305467)
![Screenshot 2025-02-25 224852](https://github.com/user-attachments/assets/e3e97404-b472-4226-b8db-f243586dbeb5)
![Screenshot 2025-02-25 224824](https://github.com/user-attachments/assets/f77edee3-d84a-4d84-8e76-f51f06d10769)


## 🛠️ Tech Stack
- **Frontend:** React, CSS  
- **Backend:** Node.js, Express.js  
- **API:** Google Perspective API. To get your API key, refer ![here](https://support.perspectiveapi.com/s/docs-enable-the-api?language=en_US).


## 🖥️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/perspective-ai-toxicity.git
cd perspective-ai-toxicity
```
### **2️⃣ Set Up Backend**
```sh
cd backend
npm install
```
Create a .env file inside backend/:

```ini
PERSPECTIVE_API_KEY=your_api_key_here
```
Start the backend server:
```sh
node server.js
```
### **3️⃣ Set Up Frontend**
```sh
cd ../frontend
npm install
npm start
```
Now, open http://localhost:3000 in your browser.

## ⚙️ API Usage
- Sends user text to Perspective API.
- Receives toxicity score (0-1 scale).
- Displays results on the UI.

Developed by Pallavi Bakale
