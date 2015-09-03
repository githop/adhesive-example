# adhesive-example

##Setup 

This is for getting the actual app. I used a yeoman generator to help get thing started. Rather than have you install the entire generator, you can simply clone this repository and serve the files locally see the app. The source code can be found [here](https://github.com/githop/adhesive-app)

  - git clone https://github.com/githop/adhesive-example.git
  - npm install -g http-server
  - cd adhesive-app
  - http-server .


###App Overview

Most of the application logic lives inside the [ThingService](https://github.com/githop/adhesive-app/blob/master/src/app/components/thingService/thing.service.js). 

I'm using angular-material pretty heavily in this app as well. It provides solution for both layout (using flex-box css) and simple directives. The toast notifcations, for example, were created with angular-material. 

Checkout [index.scss](https://github.com/githop/adhesive-app/blob/master/src/app/index.scss) to see the use of media queries and animations. I opted out of creating a base layout with SASS as I provided a custom theme (using the Gloo colors) with angular material. It takes care of applying the primary and accent colors throughout the app. It is very similar to providing a color pallete for bootstrap. You can see the theme definition [here](https://github.com/githop/adhesive-app/blob/master/src/app/index.module.js)

I hope you enjoyed using this app; I sure had a great time making it!
-Tom




