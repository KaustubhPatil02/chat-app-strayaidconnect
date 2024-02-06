
  ### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```
Url's for setup API keys and secret in .env
```
https://pusher.com/ - pusher
https://cloudinary.com/ -image upload cloudinary
https://console.cloud.google.com/apis/credentials - oauth sigin google
https://cloud.mongodb.com/ - database
```

Key Features:

- Real-time messaging using Pusher
- Message notifications and alerts
- Tailwind animations and transition effects
- Tailwind design for sleek UI
- Full responsiveness for all devices
- Google authentication integration
- Credential authentication with NextAuth
- File and image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Online/offline user status
- Message read receipts
- Message attachments and file sharing
- Group chats and one-on-one messaging
- Creating and managing chat rooms and channels
- User profile customization and settings
