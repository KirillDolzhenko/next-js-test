import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware для обработки запроса
export function middleware(request: NextRequest) {
  // Пример использования log для отладки
  console.log("Request received at middleware");

  // Выполняем редирект на /api
  return NextResponse.rewrite(new URL('/api', request.url));
}

// Настройка matcher, указываем на какие пути применять middleware
export const config = {
  matcher: '/rr', // Применяем только для /json/kil
};
