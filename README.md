# Hello Board

A message board based on `Vue.js` and `Golang`.

Here is the [backend server repository](https://github.com/kifuan/hello-board-server).

# Features

+ Avatars

  Based on `Gravatar`, we can show your avatar by email. Besides, your email **won't be displayed**.

+ Email Notifications
  
  Anyone who leaves a message can choose whether or not to receive **email notifications**.
  
  The owner can also receive notifications when **a message is posted, not replying to others**.
  
+ Unsubscribe Email Notifications

  Notifications can be unsubscribed via **a link at the bottom of the email** we sent.

  The owner can also turn it down by **configuring the backend server**.

+ Markdown Content

  We support Markdown content, which means you can post your code, images, etc.

+ Custom Emojis

  Custom emojis are supported. You can see them under `public/emojis`.

  If it is an infringement to use them, please contact me to delete them. I will not use it commercially.

# Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/kifuan/hello-board.git
   ```

2. Install requirements and build:

   ```bash
   pnpm i
   pnpm build
   ```

3. Copy `dist` folder, deploying by `Nginx` or others.

# License

This project is licensed under the MIT License.

Note: this license **DO NOT include emojis under `public/emojis`**.

