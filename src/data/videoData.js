// Static data to simulate YouTube video details

export const videoData = {
  id: "video_001",

  title: "Build a YouTube UI Clone Using React | Frontend Interview Project",

  views: "1,23,456 views",
  uploadedAt: "2 days ago",
  category: "Education",
  tags: ["react", "frontend", "ui clone", "interview project"],

  channel: {
    id: "channel_101",
    name: "Frontend Simplified",
    subscribers: "245K subscribers",
    avatar: "https://i.pravatar.cc/100?img=12",
    isVerified: true
  },

  engagement: {
    likes: 5400,
    dislikes: 120,
    shares: 320
  },

  description: `
In this video, we build a YouTube-style UI using React.

This project focuses on:
• Component-based structure
• Responsive design
• Clean UI logic
• Interview-ready frontend practices

⏱ Chapters:
00:00 Introduction
05:20 Project Setup
12:45 UI Breakdown
25:10 Final Touches
  `,

  comments: [
    {
      id: 1,
      username: "Rahul Sharma",
      avatar: "https://i.pravatar.cc/40?img=5",
      text: "This explanation was really clear. I've been struggling with component composition in React for a while, but seeing how you broke down the video details section into smaller, reusable parts made it click for me. Thanks!",
      likes: 124,
      time: "3 hours ago"
    },
    {
      id: 2,
      username: "Ananya Patel",
      avatar: "https://i.pravatar.cc/40?img=8",
      text: "Perfect project for interview preparation. The code structure is clean and follows best practices. I especially liked how you handled the responsive layout for mobile devices using simple CSS media queries instead of relying heavily on frameworks.",
      likes: 89,
      time: "1 day ago"
    },
    {
      id: 3,
      username: "Vikram Singh",
      avatar: "https://i.pravatar.cc/40?img=11",
      text: "Loved the UI breakdown part 👍",
      likes: 45,
      time: "2 days ago"
    },
    {
      id: 4,
      username: "Sneha Kulkarni",
      avatar: "https://i.pravatar.cc/40?img=16",
      text: "UI looks very close to real YouTube. Great work! One suggestion: maybe add a 'Show More' functionality for these comments if the list gets too long? Currently it loads all of them which is fine for a demo but might be heavy for a real app.",
      likes: 32,
      time: "3 days ago"
    },
    {
      id: 5,
      username: "Aman Verma",
      avatar: "https://i.pravatar.cc/40?img=20",
      text: "Can you also make a playlist section?",
      likes: 15,
      time: "4 days ago"
    },
    {
      id: 6,
      username: "Sarah Jenkins",
      avatar: "https://i.pravatar.cc/40?img=25",
      text: "I tried implementing this following your tutorial and got stuck on the flexbox alignment for the action buttons on mobile. After re-watching the responsive design chapter, I realized I missed the flex-wrap property. Works perfectly now!",
      likes: 28,
      time: "5 days ago"
    },
    {
      id: 7,
      username: "David Chen",
      avatar: "https://i.pravatar.cc/40?img=33",
      text: "Does this use the YouTube API or just static data? I'm looking to build something similar but pulling real data.",
      likes: 8,
      time: "6 days ago"
    },
    {
      id: 8,
      username: "Emily Davis",
      avatar: "https://i.pravatar.cc/40?img=9",
      text: "The way you organized the CSS modules vs global styles is interesting. I usually strictly use modules but this hybrid approach seems faster for valid prototypes. Would you recommend this for production though?",
      likes: 12,
      time: "1 week ago"
    },
    {
      id: 9,
      username: "Michael Brown",
      avatar: "https://i.pravatar.cc/40?img=12",
      text: "Clean code! 💯",
      likes: 56,
      time: "1 week ago"
    },
    {
      id: 10,
      username: "Jessica Wilson",
      avatar: "https://i.pravatar.cc/40?img=44",
      text: "For anyone wondering about the color palette, he's using the standard #0f0f0f for text and #606060 for metadata. It really makes a difference in making it feel authentic compared to just using black and gray.",
      likes: 201,
      time: "2 weeks ago"
    },
    {
      id: 11,
      username: "Chris Martin",
      avatar: "https://i.pravatar.cc/40?img=51",
      text: "Subscribed! Waiting for the next part where you connect this to a backend.",
      likes: 14,
      time: "2 weeks ago"
    },
    {
      id: 12,
      username: "Ashley Taylor",
      avatar: "https://i.pravatar.cc/40?img=35",
      text: "Could you please explain more about the 'engagement' object structure? Why separate it from the main video details? Is it because those metrics change more frequently?",
      likes: 7,
      time: "3 weeks ago"
    },
    {
      id: 13,
      username: "James Peterson",
      avatar: "https://i.pravatar.cc/40?img=55",
      text: "This tutorial is incredibly comprehensive! I've been looking for a resource that explains how to build a scalable component architecture for a video platform, and this really hits the mark. The way you broke down the atomic components like the `ActionButtons` and `ChannelInfo` before assembling them into the main `VideoDetails` view demonstrates a very mature approach to React development. I also appreciate the emphasis on responsive design. Too often, tutorials focus solely on the desktop view and leave mobile as an afterthought, but your use of standard CSS flexbox and media queries to handle the layout shift is spot on. One question I have is about optimizing the rendering of the comments section. If we were to load 500+ comments, simply mapping them would cause performance issues. Would you recommend using something like react-window or react-virtualized for a production app? Or maybe implementing a pagination strategy? Anyway, fantastic work, looking forward to the backend integration video!",
      likes: 342,
      time: "1 month ago"
    },
    {
      id: 14,
      username: "Maria Rodriguez",
      avatar: "https://i.pravatar.cc/40?img=48",
      text: "I was following along and everything was going great until I hit the CSS part. I realized I was overcomplicating my selectors. Your approach of keeping the class names semantic and relatively flat (BEM-ish style) really helps with maintainability. I used to nest my SCSS five levels deep and it was a nightmare to override anything. Seeing how clean your 'VideoDetails.css' file is was a wake-up call. Also, the transition on the description box expand/collapse is silky smooth. Did you consider using a library for the animations, or is it better to stick to pure CSS transitions for simple UI interactions like this? I guess for this scope, adding Framer Motion would be overkill, but I'm curious about your thoughts on when to reach for an animation library versus sticking to native CSS capabilities.",
      likes: 88,
      time: "1 month ago"
    }
  ],

  commentsDisabled: false
};
