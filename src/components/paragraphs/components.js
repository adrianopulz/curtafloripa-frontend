import loadable from '@loadable/component'

export const SlideShow = loadable(() => import("./slide-show/SlideShow"))
export const SimpleText = loadable(() => import("./simple-text/SimpleText"))
export const Image = loadable(() => import("./image/Image"))
export const SideBySide = loadable(() => import("./side-by-side/SideBySide"))
export const Video = loadable(() => import("./video/Video"))
export const ImageGallery = loadable(() => import("./image-gallery/ImageGallery"))
