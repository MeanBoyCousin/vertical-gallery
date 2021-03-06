import {
    imageMouseEnter
} from './accordion-gallery.js';

describe('image div mouse enter actions', () => {
    //Define Environment
    jest.useFakeTimers();
    let options = {
        images: [{
            image: 'images/1.jpg',
            caption: 'This is a caption with a button.',
            buttonText: 'Click me!',
            buttonLink: 'https://www.pexels.com/photo/grayscale-photography-of-woman-1572878/'
        }],
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
        radius: '10px',
        scale: 0.8
    };
    document.body.innerHTML = `<div id="acc-container">
                                <div class="vg-img">
                                    <div class="text-button-container"></div>
                                </div>
                            </div>`;
    const imageDiv = document.getElementsByClassName('vg-img');
    const index = options.images.length - 1;
    imageMouseEnter(imageDiv[0], options, index);
    const styledImages = document.getElementsByClassName('vg-img');
    const textContainers = document.getElementsByClassName('text-button-container');

    //Tests
    test('should be defined', () => {
        expect(imageMouseEnter).toBeDefined();
    });

    test('should set all text containers opacities to 1', () => {
        expect(textContainers[0].style.opacity).toEqual('1');
    });

    test('should apply styles to image div', () => {
        expect(styledImages[0].style.opacity).toEqual('1');
        expect(styledImages[0].style.transform).toEqual('scale(1)');
        expect(styledImages[0].style.flex).toEqual('5');
    });

    jest.advanceTimersByTime(1);

    test('should run setTimeout after 0ms', () => {
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
    });

    test('should apply box shadow', () => {
        expect(styledImages[0].style.boxShadow).toEqual('0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.44)');
    });
});

describe('image div with no box shadow', () => {
    test('should not apply box shadow', () => {
        //Define Environment
        const noShadowOptions = {
            images: [{
                image: 'images/1.jpg',
                caption: 'This is a caption with a button.',
                buttonText: 'Click me!',
                buttonLink: 'https://www.pexels.com/photo/grayscale-photography-of-woman-1572878/'
            }],
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
            shadow: false,
            speed: 300,
            radius: '10px',
            scale: 0.8
        };
        document.body.innerHTML = `<div id="acc-container">
                                <div class="vg-img">
                                    <div class="text-button-container"></div>
                                </div>
                            </div>`;
        const imageDiv = document.getElementsByClassName('vg-img');
        const index = noShadowOptions.images.length - 1;
        imageMouseEnter(imageDiv[0], noShadowOptions, index);
        const styledImages = document.getElementsByClassName('vg-img');

        expect(styledImages[0].style.boxShadow).toEqual('');
    });
});