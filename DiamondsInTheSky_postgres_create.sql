CREATE TABLE "users" (
	"id" serial NOT NULL,
	"firstname" TEXT NOT NULL,
	"lastname" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"github" TEXT NOT NULL,
	"linkedin" TEXT NOT NULL,
	"facebook" TEXT NOT NULL,
	"twitter" TEXT NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "events" (
	"id" serial NOT NULL UNIQUE,
	"user_id" integer NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users_events" (
	"user_id" integer NOT NULL,
	"event_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "responses" (
	"user_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	"status" varchar NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "events" ADD CONSTRAINT "events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "users_events" ADD CONSTRAINT "users_events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users_events" ADD CONSTRAINT "users_events_fk1" FOREIGN KEY ("event_id") REFERENCES "events"("id");

ALTER TABLE "responses" ADD CONSTRAINT "responses_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "responses" ADD CONSTRAINT "responses_fk1" FOREIGN KEY ("event_id") REFERENCES "events"("id");

