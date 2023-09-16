# @dawiidio/ts-models-chat

just a very simple demo of how you can use [TypeChat](https://microsoft.github.io/TypeChat/) to talk with your own types and codebase. This repo was created as result of video recording about AI tools for developers, you can find it [on my chaneel](https://www.youtube.com/@dawiid_io), but this particular viedo I recorded in Polish only :)

## Usage

```sh
npm i
npm run build
```

change name of `.env.template` to `.env` and paste your OpenAI api key
in `OPENAI_API_KEY` var.

Now you can run our cli

```
node lib/index.js
```

example commands you can pass to cli:

```txt
create user John Doe with premium plan, add "Spirited Away" movie to his watch list
```

it should return `User` object filled with data extracted from your command. You can find interface User, which was used as schema, in `types/User.ts`. It is just a sample interface of user in Netflix like app