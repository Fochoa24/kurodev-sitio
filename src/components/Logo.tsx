import { useId } from 'react';

/** Logotipo "kuro.dev" (marca/logo/logotipo-negativo.svg) con trazo en currentColor. */
export function Logo({ titulo = 'kuro.dev' }: { titulo?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="-2 21 420 83" role="img" aria-label={titulo}>
      <defs>
        <clipPath id={`${id}t`}>
          <rect x="-10" y="25" width="440" height="75" />
        </clipPath>
        <clipPath id={`${id}s`}>
          <rect x="-10" y="50" width="440" height="50" />
        </clipPath>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="12">
        <path clipPath={`url(#${id}t)`} d="M6 25V100M284 25V100" />
        <path
          clipPath={`url(#${id}s)`}
          d="M6 86L44 44M20 68L46 106M62 50V76A18 18 0 0 0 98 76M98 50V100M120 50V100M120 80C120 62 130 56 148 56M306 75H344A19 19 0 1 0 339.6 87.2M366 44L389 104L412 44"
        />
        <circle cx="181" cy="75" r="19" />
        <circle cx="265" cy="75" r="19" />
      </g>
      <circle cx="222" cy="92" r="8" fill="#B8F23A" />
    </svg>
  );
}
