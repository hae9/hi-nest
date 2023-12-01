import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  // controller 는 express 의 라우터 같은 존재, url을 가져오고 함수 실행
  controllers: [MoviesController],
  // 나머지 비즈니스 로직은 서비스로
  providers: [MoviesService],
})
export class AppModule {}
