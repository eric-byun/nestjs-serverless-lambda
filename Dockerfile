FROM public.ecr.aws/lambda/nodejs:16

COPY . .

RUN npm run build

CMD ["dist/lambda.handler"]
