import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`🚀 server started on http://localhost:${port}`);
}
bootstrap();
