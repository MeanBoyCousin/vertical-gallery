# accordion-gallery [![Build Status](https://travis-ci.org/MeanBoyCousin/accordion-gallery.svg?branch=master)](https://travis-ci.org/MeanBoyCousin/accordion-gallery) [![codecov](https://codecov.io/gh/MeanBoyCousin/accordion-gallery/branch/master/graph/badge.svg)](https://codecov.io/gh/MeanBoyCousin/accordion-gallery) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FMeanBoyCousin%2Faccordion-gallery%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/MeanBoyCousin/accordion-gallery/master)
An ES6 JavaScript accordion gallery component.

```html
<div id="acc-container"></div>

<script>
    
    import { buildGallery } from 'accordion-gallery-min.js';

    const options = {
        //Required.
        images: [{
            image: 'images/1.jpg',
            caption: 'This is a caption with a button.',
            buttonText: 'Click me!',
            buttonLink: 'https://www.pexels.com/photo/grayscale-photography-of-woman-1572878/'
        }],

        //Defaults / Optional.
        linksInNewTab: true,                     
        captionPosition: 'bottom',
        captionBkgColor: 'rgba(255,255,255,0.75)',
        featuredImage: undefined,
        featuredWidth: 5,
        media: {
            320: [0, 1, 2, 3],
            425: [0, 1, 2],
            768: [5, 6]
        },
        galleryWidth: '100%',
        galleryHeight: '100vh',
        opacity: 0.25,
        shadow: true,
        speed: 300,
        radius: 0,
        scale: 1
    };

    buildGallery(options);
    
</script>
```
## Config
The ```options``` parameter must be passed to the ```buildGallery()``` function as an object.

All ```options``` (except images) have a default value so you need only specific the options that you wish to explicitly set.

---

### options.images (Required)
Type: ```Array```

Set the images as well as any captions or buttons. Each image must be added as an object and can include ```image``` as a URL, ```caption``` as a string, ```buttonText``` as a string and ```buttonLink``` as a URL.

Example:

```js
images: [{
        image: 'images/1.jpg',
        caption: 'This is a caption with a button.',
        buttonText: 'Click me!',
        buttonLink: 'https://www.pexels.com/photo/grayscale-photography-of-woman-1572878/'
    },
    {
        image: 'images/2.jpg',
        buttonText: 'Solo button!',
        buttonLink: 'https://www.pexels.com/photo/grayscale-photo-of-topless-woman-1164674/'
    },
    {
        image: 'images/3.jpg',
        caption: 'This is a solo caption.',
    },
    {
        image: 'images/4.jpg'
    }
]
```

---

### options.linksInNewTab (Optional)
Type: ```boolean```

Specifies if clicked buttons should open in a new tab or within the current tab.

Example:

```js
linksInNewTab: true
```

---

### options.linkType (Optional)
Type: ```string```

Accepts: ```'noopener' || 'noreferrer'```

Specifies the link type for cross-origin destinations.

Example:

```js
linkType: 'noopener'
```

---

### options.captionPosition (Optional)
Type: ```string```

Accepts: ```'top' || 'middle' || 'bottom'```

Specifies where on the image the caption and button should appear.

Example:

```js
linksInNewTab: 'top'
```

---

### options.captionBkgColor (Optional)
Type: ```string```

Accepts: Any color format as a string.

Specifies the background color for the caption and button container.

Example:

```js
captionBkgColor: '#000'    //Sets the container to a black background.
```

---

### options.featuredImage (Optional)
Type: ```number```

Accepts: A number equal to one of the images in the gallery. Images are ```zero indexed``` so if you want to feature the first image, you must specify ```0``` as the value.

Specifies an image to focus as a feature. This image is always expanded when the user is not interacting with the gallery.

Example:

```js
featuredImage: 3    //Features the 4th image.
```

---

### options.featuredWidth (Optional)
Type: ```number```

Accepts: A number above 1.

Specifies the width of the hovered/featured image. A greater number will provide a larger feature.

Example:

```js
featuredWidth: 3
```

---

### options.media (Optional)
Type: ```object```

Accepts: Any key as a number followed by an array as a value.

Specifies break points at which the gallery should shrink to show less images. The array specifies which images should be removed. Again, images are ```zero indexed``` so removing images 1 & 2 would mean adding ```[0, 1]```.

Example:

```js
{
    320: [0, 1, 2, 3],    //Removes images 1,2,3,4 on screens equal to or less than 320px wide.
    425: [0, 1, 2],       //Removes images 1,2,3 on screens equal to or less than 425px wide.
    768: [5, 6]           //Removes images 6,7 on screens equal to or less than 768px wide.
}
```

---

### options.galleryWidth (Optional)
Type: ```string```

Accepts: Any width value as a string.

Specifies the width of the gallery on the page.

Example:

```js
galleryWidth: '100%'
```

---

### options.galleryHeight (Optional)
Type: ```string```

Accepts: Any height value as a string.

Specifies the height of the gallery on the page.

Example:

```js
galleryHeight: '100vh'
```

---

### options.opacity (Optional)
Type: ```number```

Accepts: Any number value between 0 - 1.

Specifies the opacity of the un-hovered images.

Example:

```js
opacity: 0.25
```

---

### options.shadow (Optional)
Type: ```boolean```

Specifies if hovered images should have a box-shadow.

Example:

```js
shadow: true
```

---

### options.speed (Optional)
Type: ```number```

Accepts: Any number above 0.

Specifies the transition speed of the gallery. This is set in ms so a value of 1000 = 1 second.

Example:

```js
speed: 300    //Equal to 0.3 seconds.
```

---

### options.radius (Optional)
Type: ```string```

Accepts: Any radius value as a string.

Specifies the border radius for caption containers and images on hover.

Example:

```js
radius: '50px'
```

---

### options.scale (Optional)
Type: ```number```

Accepts: Any number below 1.

Specifies the scale rate for un-hovered images.

Example:

```js
scale: 0.75
```

---

## Demo
Check out the [gallery from the demo folder.](https://tim-dunphy-portfolio.herokuapp.com/vertical-gallery/index.html)

## Authors
Tim Dunphy

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

## Acknowledgments
Thank you to the following for providing outstanding photography for the demo gallery.

* [**Alexander Krivitskiy**](https://www.pexels.com/photo/grayscale-photography-of-woman-1572878/)

* [**Dazzle Jam**](https://www.pexels.com/photo/grayscale-photo-of-topless-woman-1164674/)

* [**Daria Shevtsova**](https://www.pexels.com/photo/photography-of-a-woman-holding-green-leaves-1071162/)

* [**Mihai Stefan**](https://www.pexels.com/photo/woman-in-yellow-and-black-top-957882/)

* [**Harsh Kushwaha**](https://www.pexels.com/photo/woman-posing-for-photo-shoot-1689731/)

* [**Isabella Mariana**](https://www.pexels.com/photo/woman-s-face-1988681/)

* [**Renato Abati**](https://www.pexels.com/photo/woman-with-orange-petaled-flower-on-her-lips-1937394/)

---

Thank you to [**@ZephSibley**](https://github.com/ZephSibley) for the help with testing.