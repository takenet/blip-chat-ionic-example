# Blip Chat Ionic App example (React)
> An example app built with Ionic and React using the BLiP Chat Widget

Meet [BLiP](http://blip.ai)!

## How to run

#### Install all the dependencies:

```sh
yarn
```

or

```sh
npm install
```

#### Execute the project:

```sh
ionic serve
```

**Note: Remember to install the Ionic CLI (`npm install -g @ionic/cli`)** 

## Built With
This project was bootstrapped with [Ionic](https://ionicframework.com/).

* Ionic - An open source mobile UI toolkit for building high quality, cross-platform native and web app experiences
* React - A library for building user interfaces
* [BLiP Chat Widget](https://www.npmjs.com/package/blip-chat-widget) - Widget to enable add the BLiP Chat in your web app or site

## Using BLiP Chat with React and Typescript

Create the file (`blip-chat-widget/index.d.ts`) in yout types folder and add the script below:
```typescript
declare module 'blip-chat-widget'
```

To launch the widget, you have to add the script in the mount/init function in your component.
Example:

```typescript
import { BlipChat } from "blip-chat-widget";

useEffect(() => {
    new BlipChat()
      .withAppKey(
        "YOUR-APP-KEY"
      )
      .build();
}, []);
```

## Troubleshotting

* Is it possible to use BLiP Chat Widget adding the script directly in (`public/index.html`), but it is not recommended.

Example:
```html
<script src="https://unpkg.com/blip-chat-widget@1.6.*" type="text/javascript"></script>
<script>
    (function () {
        window.onload = function () {
            new BlipChat()
            .withAppKey('YOUR-APP-KEY')
            .withButton({"color":"#2CC3D6"})
            .build();
        }
    })();
</script>
```

## Contributing

1. Fork it (<https://github.com/luisrondow/blip-chat-react-native-example>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request