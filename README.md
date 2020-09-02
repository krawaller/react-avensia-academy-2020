# Hello!

This is study material and additional thingiemajigs for the React parts of Avensia's 2020 edition of Academy.

### Getting started

1. Clone this repo

   `git clone https://github.com/krawaller/react-avensia-academy-2020.git`

1. Then, inside the repo folder

   `npm install`

1. Create your own personal branch of the repo

   `git checkout -b myawesomebranch`

   (where `myawesomebranch` can be whichever name you want)

1. Make sure I add your Github user to the repo!

1. Start the storybook!

   `npm run storybook`

### Workflow

- Once you feel cocky enough you can start **adding your own components**, either manually or by using the scaffolding command:

  `npm run stub src/mystuff/awesomecomponent`

  (where you can use whichever path and component name you want, but I recommend you put them in a toplevel folder inside `src`)

- You'll want to **commit your work** as you normally would, and **push it to your branch**

- If you want to **get new fancy stuff from the master branch** (as I'll add more material before each course day), you can get your branch up to date by doing:

  ```
  git fetch
  git rebase origin/master
  ```

- If you need **code help outside of study days**, just make sure that you have pushed your branch. I will then fetch it to my machine, and can help you out through advice or/and making a PR to your branch.
