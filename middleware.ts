/**
 * LUX FIDEI · middleware.ts
 * /santos/{cat}/{slug} → 308 → /santos/{cat}/{slug}/{primeiraAba}
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  SANTOS_MANIFEST,
  type SantoManifestEntry,
} from './app/santos/_lib/santos-manifest.generated';

const MANIFEST = SANTOS_MANIFEST as Record<string, SantoManifestEntry>;

const SANTO_ROOT_RE = /^\/santos\/([^/]+)\/([^/]+)\/?$/;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const match = pathname.match(SANTO_ROOT_RE);
  if (!match) return NextResponse.next();

  const categoria = match[1];
  const slug = match[2];
  const entry = MANIFEST[`${categoria}/${slug}`];

  if (!entry?.primeiraAba) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/santos/${entry.categoria}/${entry.slug}/${entry.primeiraAba}`;
  url.search = search;

  const response = NextResponse.redirect(url, 308);
  response.headers.set('X-Lux-Fidei-Redirect', 'santo-root-to-first-tab');
  return response;
}

export const config = {
  matcher: ['/santos/:categoria/:slug', '/santos/:categoria/:slug/'],
};