import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;
export function connectDatabase(): void {
  prisma = new PrismaClient();
}

export async function disconnectDatabase(): Promise<void> {
  await prisma?.$disconnect();
}
