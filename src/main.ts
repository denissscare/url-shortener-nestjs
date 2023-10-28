import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 9000;

  const config = new DocumentBuilder()
    .setTitle('Url Shortener')
    .setDescription('Api documentation')
    .setVersion('1.0.0')
    .build();

  const app = await NestFactory.create(AppModule);

  const documet = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documet);

  await app.listen(port, () => console.log(`server start on port ${port}`));
}
bootstrap();
