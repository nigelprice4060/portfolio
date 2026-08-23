window.onload = function() {
    document.body.className += " loaded";
}

const hoverImages = [
    // Home Page Hover Images
    'Home_EngineeringHoverNEW.png',
    'Home_VFXHoverNEW.png',
    'Home_ExtWorkHoverNEW.png',
    'Home_CareerHoverNEW.png',
    
    // Engineering Projects Hover Images
    'FFBWheelFrontRightHoverShrankNEW.png',
    'FFBWheelTopDownHoverShrankNEW.png',
    
    // 3D Modeling Hover Images
    'StageV2ShowcaseHoverNEW.png',
    'SilversRoomShowcaseHover.png',
    'BuffetAltView.png',
    'WinkerAnimLonger.gif',
    'LPCtopdown.jpg',
    'StageV1ShowcaseHover.gif',
    
    // External Work Hover Images
    'RUCRT_SiteShowcaseHoverNEW.png'
];

function preloadImages(urls) {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

// Preload after initial page load to avoid blocking core content
window.addEventListener('load', () => {
    preloadImages(hoverImages);
});
