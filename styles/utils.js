export const addOpacityToHexColor = (color, opacity) => {
    let opacityHex = Math.round(opacity * 255).toString(16);
    return `${color}${opacityHex}`
}