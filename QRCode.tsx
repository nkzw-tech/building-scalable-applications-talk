export default function QRCode({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 984 984"
    >
      <defs>
        <linearGradient
          id="pattern-mask"
          x1="0%"
          y1="0%"
          x2="12%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#fff"></stop>
          <stop offset="100%" stop-color="#fff"></stop>
        </linearGradient>
        <mask id="qrmask">
          <g fill="#ffffff">
            <g>
              <g transform="translate(240,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,48) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,72) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,96) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,120) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,144) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,168) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,192) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,216) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,240) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(72,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,264) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,288) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,312) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,336) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,360) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,384) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(72,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,408) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,432) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,456) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(72,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,480) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,504) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(72,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,528) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,552) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(72,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,576) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,600) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,624) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(120,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,648) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(96,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,672) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(144,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,696) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(48,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(168,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(192,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(216,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,720) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(600,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,744) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,768) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,792) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,816) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(816,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,840) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(240,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,864) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(288,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(360,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(480,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(528,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(576,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(720,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(792,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,888) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(264,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(312,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(336,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(384,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(408,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(432,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(456,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(504,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(552,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(624,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(648,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(672,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(696,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(744,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(768,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(840,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(864,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(888,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
              <g transform="translate(912,912) scale(4.12)">
                <rect width="6" height="6"></rect>
              </g>
            </g>
          </g>
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="984"
        height="984"
        mask="url(#qrmask)"
        fill="url(#pattern-mask)"
      ></rect>
      <g>
        <g transform="translate(48,48)" fill="#fff">
          <g transform="scale(12)">
            <path d="M4.5,14h5.1C12,14,14,12,14,9.6V4.5C14,2,12,0,9.5,0H4.4C2,0,0,2,0,4.4v5.1C0,12,2,14,4.5,14z M12,4.8v4.4 c0,1.5-1.3,2.8-2.8,2.8H4.8C3.2,12,2,10.8,2,9.2V4.8C2,3.3,3.3,2,4.8,2h4.4C10.8,2,12,3.2,12,4.8z"></path>
          </g>
        </g>
        <g transform="translate(768,48)" fill="#fff">
          <g transform="scale(12)">
            <path d="M4.5,14h5.1C12,14,14,12,14,9.6V4.5C14,2,12,0,9.5,0H4.4C2,0,0,2,0,4.4v5.1C0,12,2,14,4.5,14z M12,4.8v4.4 c0,1.5-1.3,2.8-2.8,2.8H4.8C3.2,12,2,10.8,2,9.2V4.8C2,3.3,3.3,2,4.8,2h4.4C10.8,2,12,3.2,12,4.8z"></path>
          </g>
        </g>
        <g transform="translate(48,768)" fill="#fff">
          <g transform="scale(12)">
            <path d="M4.5,14h5.1C12,14,14,12,14,9.6V4.5C14,2,12,0,9.5,0H4.4C2,0,0,2,0,4.4v5.1C0,12,2,14,4.5,14z M12,4.8v4.4 c0,1.5-1.3,2.8-2.8,2.8H4.8C3.2,12,2,10.8,2,9.2V4.8C2,3.3,3.3,2,4.8,2h4.4C10.8,2,12,3.2,12,4.8z"></path>
          </g>
        </g>
        <g transform="translate(96,96)" fill="#fff">
          <g transform="scale(12)">
            <path d="M6,1.7v2.7C6,5.2,5.2,6,4.3,6H1.7C0.7,6,0,5.3,0,4.3V1.7C0,0.8,0.8,0,1.7,0h2.7C5.3,0,6,0.7,6,1.7z"></path>
          </g>
        </g>
        <g transform="translate(816,96)" fill="#fff">
          <g transform="scale(12)">
            <path d="M6,1.7v2.7C6,5.2,5.2,6,4.3,6H1.7C0.7,6,0,5.3,0,4.3V1.7C0,0.8,0.8,0,1.7,0h2.7C5.3,0,6,0.7,6,1.7z"></path>
          </g>
        </g>
        <g transform="translate(96,816)" fill="#fff">
          <g transform="scale(12)">
            <path d="M6,1.7v2.7C6,5.2,5.2,6,4.3,6H1.7C0.7,6,0,5.3,0,4.3V1.7C0,0.8,0.8,0,1.7,0h2.7C5.3,0,6,0.7,6,1.7z"></path>
          </g>
        </g>
      </g>
      <image href="/logo.png" width="264" height="264" x="360" y="360" />
    </svg>
  );
}
