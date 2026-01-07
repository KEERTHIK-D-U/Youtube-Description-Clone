# YouTube Description Clone 

## About the Project

This project is a frontend clone of the **YouTube video details section** that appears below a video player.  
The video player itself is not included. The main focus is on building the UI that shows video information, channel details, actions, description, and comments.

This project was built using **React** and **static JSON data** to practice component-based UI development, state handling, and responsive design.

---

## What This Project Shows

The UI includes:

- Video title  
- Views count and upload time  
- Channel information with avatar and verified badge  
- Like and Share buttons  
- Expandable and collapsible video description  
- Preview of comments with user avatars  
- Loading state before data is shown  
- Responsive layout for mobile, tablet, and desktop screens  

Icons are used instead of emojis or plain text to make the UI feel closer to the real YouTube design.

## How the Project Works

- All the video-related data is stored in a static file (`videoData.js`)
- The `VideoDetails` component controls the layout and loading state
- Data is passed to smaller components like:
  - `VideoTitle`
  - `ChannelInfo`
  - `ActionButtons`
  - `VideoDescription`
  - `CommentsPreview`
- Local state is used for interactions like:
  - Like button toggle
  - Show more / Show less description
- Only a few comments are shown as a preview, similar to YouTube

---

## Tech Used

- React (Functional Components)  
- CSS (custom styling, no UI frameworks)  
- Bootstrap Icons  
- Static JSON data (no backend, no APIs)  

---

## Folder Structure

```text
src/
├── components/
│   ├── VideoDetails/
│   │   ├── VideoDetails.jsx
│   │   ├── VideoTitle.jsx
│   │   ├── ChannelInfo.jsx
│   │   ├── ActionButtons.jsx
│   │   ├── VideoDescription.jsx
│   │   ├── CommentsPreview.jsx
│   │   ├── CommentItem.jsx
│   │   └── VideoDetails.css
│   │
│   └── common/
│       ├── Button.jsx
│       └── Loader.jsx
│
├── data/
│   └── videoData.js
│
├── App.jsx
├── main.jsx
└── index.css

