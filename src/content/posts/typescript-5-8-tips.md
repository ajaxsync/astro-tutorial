---
title: "💡 TypeScript 5.8 的 10 个实用技巧"
publishedAt: 2026-05-07T09:15:00
tags: ["TypeScript", "开发技巧", "教程"]
draft: false
---

TypeScript 5.8 带来了很多实用的新特性，这里分享 10 个我最喜欢的技巧！

## 技巧 1: 更精确的推断

```typescript
// 之前
function createPoint(x: number, y: number) {
  return { x, y }; // 返回类型：{ x: number; y: number; }
}

// 现在 - 支持泛型推断
function createPoint<T extends number>(x: T, y: T) {
  return { x, y }; // 更精确的类型推断
}
```

## 技巧 2: 改进的 const 推断

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;

// config.apiUrl 的类型现在是字面量类型
// 而不是 string
```

## 技巧 3: 更好的错误边界

```typescript
// 使用新的 satisfies 操作符
type Route = {
  path: string;
  component: string;
};

const routes = {
  home: { path: '/', component: 'Home' },
  about: { path: '/about', component: 'About' },
} satisfies Record<string, Route>;
```

## 技巧 4: 模板字面量类型

```typescript
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Endpoint = `/api/${string}`;

type ApiRequest = `${HttpMethod} ${Endpoint}`;
// 类型： "GET /api/users" | "POST /api/users" | ...
```

## 技巧 5: 条件类型优化

```typescript
type ExtractPromise<T> = T extends Promise<infer U> ? U : T;

type Result = ExtractPromise<Promise<string>>; // string
```

## 技巧 6: 映射类型改进

```typescript
type ReadonlyKeys<T> = {
  readonly [K in keyof T]: T[K];
};

type PartialKeys<T> = {
  [K in keyof T]?: T[K];
};
```

## 技巧 7: 工具类型组合

```typescript
type AppUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// 组合使用工具类型
type PublicUser = Omit<AppUser, 'password'>;
type UserUpdate = Partial<Pick<AppUser, 'name' | 'email'>>;
```

## 技巧 8: 类型守卫优化

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function process(value: unknown) {
  if (isString(value)) {
    // value 在这里被推断为 string
    return value.toUpperCase();
  }
}
```

## 技巧 9: 泛型约束

```typescript
type Numeric = number | bigint;

function add<T extends Numeric>(a: T, b: T): T {
  return (a + b) as T;
}

add(1, 2); // number
add(1n, 2n); // bigint
```

## 技巧 10: 模块解析优化

```typescript
// 使用新的模块解析策略
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "module": "ESNext"
  }
}
```

---

## 总结

这些技巧可以帮助你写出更类型安全、更易维护的 TypeScript 代码。建议在实际项目中逐步应用！

📚 更多技巧请参考 [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
