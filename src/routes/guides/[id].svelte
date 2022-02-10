<script context="module" lang="ts">
  export async function load({ params, fetch }) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const guide = await res.json();

    if (res.ok) {
      return {
        props: {
          guide,
        },
      };
    }

    // 예를들어 없는 id 를 쳐서 에러나면 리다이렉트 시킨다.
    return {
      status: 301,
      redirect: '/guides',
    };
  }
</script>

<script lang="ts">
  import IGuide from '../../types/guide.interface';

  export let guide: IGuide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
