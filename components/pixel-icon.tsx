/** 8x8 bitmaps: every "X" is one pixel */
const GRIDS = {
    play: [
        '.X......',
        '.XX.....',
        '.XXX....',
        '.XXXX...',
        '.XXXX...',
        '.XXX....',
        '.XX.....',
        '.X......',
    ],
    pause: [
        '........',
        '.XX..XX.',
        '.XX..XX.',
        '.XX..XX.',
        '.XX..XX.',
        '.XX..XX.',
        '.XX..XX.',
        '........',
    ],
    restart: [
        '........',
        '.X....X.',
        '.X...XX.',
        '.X..XXX.',
        '.X.XXXX.',
        '.X..XXX.',
        '.X...XX.',
        '.X....X.',
    ],
    share: [
        '...XX...',
        '..XXXX..',
        '.X.XX.X.',
        '...XX...',
        '...XX...',
        'X......X',
        'X......X',
        'XXXXXXXX',
    ],
    close: [
        'XX....XX',
        'XXX..XXX',
        '.XXXXXX.',
        '..XXXX..',
        '..XXXX..',
        '.XXXXXX.',
        'XXX..XXX',
        'XX....XX',
    ],
    cursor: [
        'X...',
        'XX..',
        'XXX.',
        'XX..',
        'X...',
    ],
};

export type PixelIconName = keyof typeof GRIDS;

export type PixelIconProps = {
    name: PixelIconName;
    /** Size of a single pixel, in px */
    scale?: number;
    className?: string;
}

export default function PixelIcon({ name, scale = 2, className }: PixelIconProps) {
    const grid = GRIDS[name];
    const width = grid[0].length;
    const height = grid.length;

    return <svg
        className={className}
        width={width * scale}
        height={height * scale}
        viewBox={`0 0 ${width} ${height}`}
        shapeRendering="crispEdges"
        fill="currentColor"
        aria-hidden="true"
    >
        {grid.flatMap((row, y) => [...row].map((cell, x) =>
            cell === 'X' ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null
        ))}
    </svg>
}
