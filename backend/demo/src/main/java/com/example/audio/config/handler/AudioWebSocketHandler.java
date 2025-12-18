package com.example.audio.config.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

import reactor.core.publisher.Mono;

@Component
public class AudioWebSocketHandler implements WebSocketHandler {

    @Override
    public Mono<Void> handle(WebSocketSession session) {

        return session.receive()
                .map(WebSocketMessage::getPayloadAsText)
                .flatMap(message -> {
                    String response = "Audio received (mock transcription)";
                    return session.send(
                            Mono.just(session.textMessage(response))
                    );
                })
                .then();
    }
}
