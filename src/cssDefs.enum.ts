export const lengthTypes = [
    {unit: 'cap', default: 20},
    {unit: 'ch', default: 30},
    {unit: 'em', default: 15},
    {unit: 'ex', default: 33},
    {unit: 'ic', default: 15},
    {unit: 'lh', default: 13}
]

export const figureSides = [
    {side: 'top'},
    {side: 'right'},
    {side: 'bottom'},
    {side: 'left'}
]
export const figureCorners = [
    {corner: 'top_left'},
    {corner: 'top_right'},
    {corner: 'bottom_right'},
    {corner: 'bottom_left'}
]

export const optional = '?'

export const clipPathExamples = {
    inset: '20%'
}

export enum StyleOptions{
    dimensions,
    colors,
    clipPath,
    filter,
    mask
}

export enum ClipPathOptions{
    clip_source,
    basic_shape,
    geometry_box
}

export enum BasicShapeOptions {
    inset,
    circle,
    ellipse,
    polygon,
    path,
    rect,
    shape,
    xywh
}

export enum FilterOptions{
    blur,
    brightness,
    contrast,
    drop_shadow,
    grayscale,
    hue_rotate,
    invert,
    opacity,
    sepia,
    saturate
}

export enum BrightnessArgs{
    number,
    percentage
}

export enum CircleArgs{
    radial_size,
    position
}

export enum RadialSizeTypes{
    radial_extent,
    length,
    length_percentage
}

export enum RadialExtentType{
    closest_corner,
    closest_side,
    farthest_corner,
    farthest_side
}

export enum CirclePosition{
    left,
    center,
    right,
    top,
    bottom,
    length_percentage
}

export enum InsetArgs{
    length_percentage,
	border_radius
}

export enum InsetLengthType{
	length,
	percentage
}

export enum PolygonArgs{
    fillRule,
    length,
    length_percentage
}

export enum PolygonLengthType{
    length,
    length_percentage
}

export enum PathArgs{
    fill_rule,
    string
}

export enum fillRuleType{
    nonzero,
    evenodd
}