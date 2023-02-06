import { Container, Badge, Card } from "@mantine/core";
import {
  IconBrandAmazon,
  IconBrandDocker,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandTailwind,
  IconBrandUnity,
  IconBrandUbuntu,
  IconBrandCSharp,
} from "@tabler/icons-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alva</title>
      </Head>
      <Container className="pt-4 pb-12 grid gap-6">
        <section>
          <div className="text-gray-500 uppercase text-sm mb-3">
            &mdash; tell me about yourself
          </div>

          <div className="text-xl font-bold">
            Hello, I&apos;m <span className="text-teal-500">Alva</span>.
          </div>
          <div className="text-base">I&apos;m a programmer from Indonesia.</div>
        </section>

        <section>
          <div className="text-gray-500 uppercase text-sm mb-3">
            &mdash; what tools / language / concepts do you use
          </div>

          <div className="grid gap-3">
            <Card withBorder shadow={"sm"} radius={"sm"}>
              <Card.Section withBorder className="p-3 flex flex-row gap-3">
                <Badge
                  leftSection={<IconBrandNextjs size={16} />}
                  color={"gray"}
                >
                  next.js
                </Badge>
                <Badge
                  leftSection={<IconBrandTailwind size={16} />}
                  color={"gray"}
                >
                  Tailwind
                </Badge>
                <Badge
                  leftSection={<IconBrandMantine size={16} />}
                  color={"gray"}
                >
                  Mantine
                </Badge>
              </Card.Section>
              <Card.Section className="p-3">
                Since I mostly handle front-end side of web development, these
                are my go-to tools.
                <br />
                <br />
                Setup is pretty easy to do and I find them the most flexible to
                work with.
              </Card.Section>
            </Card>

            <Card withBorder shadow={"sm"} radius={"sm"}>
              <Card.Section withBorder className="p-3 flex flex-row gap-3">
                <Badge
                  leftSection={<IconBrandDocker size={16} />}
                  color={"gray"}
                >
                  Docker
                </Badge>
              </Card.Section>
              <Card.Section className="p-3">
                I usually ship my web apps with Docker. <br /> <br /> I always
                try to reduce my image as much as possible using npm pruning &
                multi-stage builds and implement caching for faster builds.
              </Card.Section>
            </Card>

            <Card withBorder shadow={"sm"} radius={"sm"}>
              <Card.Section withBorder className="p-3 flex flex-row gap-3">
                <Badge
                  leftSection={<IconBrandUbuntu size={16} />}
                  color={"gray"}
                >
                  Ubuntu
                </Badge>
              </Card.Section>
              <Card.Section className="p-3">
                I made the switch from Windows so I can familiarize myself with
                the linux environment, now Ubuntu is my primary OS.
              </Card.Section>
            </Card>

            <Card withBorder shadow={"sm"} radius={"sm"}>
              <Card.Section withBorder className="p-3 flex flex-row gap-3">
                <Badge
                  leftSection={<IconBrandAmazon size={16} />}
                  color={"gray"}
                >
                  AWS
                </Badge>
                <Badge color={"gray"}>Terraform</Badge>
              </Card.Section>
              <Card.Section className="p-3">
                For medium sized projects, I usually deploy with ECR on EC2 with
                autoscaling, using CodePipeline for CI/CD. I also use Elastic
                Load Balancer to handle incoming traffic.
                <br />
                <br />
                Most of it is configured using Terraform.
              </Card.Section>
            </Card>

            <Card withBorder shadow={"sm"} radius={"sm"}>
              <Card.Section withBorder className="p-3 flex flex-row gap-3">
                <Badge
                  leftSection={<IconBrandUnity size={16} />}
                  color={"gray"}
                >
                  Unity
                </Badge>

                <Badge
                  leftSection={<IconBrandCSharp size={16} />}
                  color={"gray"}
                ></Badge>
              </Card.Section>
              <Card.Section className="p-3">
                During free time I like to work on my personal game. It&apos;s a
                top down RPG based dungeon crawler autobattler with talent tree,
                skills, and items inspired by Path of Exile and Dota 2.
                <br /> <br />
                Although I&apos;m still in the learning phase.
              </Card.Section>
            </Card>

            <Card withBorder shadow={"sm"} radius={"sm"}>
              <Card.Section withBorder className="p-3 flex flex-row gap-3">
                <Badge
                  leftSection={<IconBrandPython size={16} />}
                  color={"gray"}
                >
                  Python
                </Badge>
              </Card.Section>
              <Card.Section className="p-3">
                I use python mainly for making desktop tools to assist in games
                such as Cooldown Trackers.
                <br /> <br />
                Somewhat familliar with coroutines, threads, tesseract OCR.
              </Card.Section>
            </Card>
          </div>
        </section>

        <section>
          <div className="text-gray-500 uppercase text-sm mb-3">
            &mdash; how do i reach out
          </div>
          Email me at{" "}
          <a
            href="mailto:rpondering@gmail.com"
            className="underline text-teal-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            r.pondering@gmail.com
          </a>
        </section>
      </Container>
    </>
  );
}
