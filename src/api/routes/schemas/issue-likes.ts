import z from 'zod';

export const LikeResponseSchema = z.object({
  id: z.string(),
  likes: z.number(),
  liked: z.boolean(),
});
